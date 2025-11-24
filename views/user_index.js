let currentGuideMeta = null;

/********************************************************************************
* Client Log Sever ....
*********************************************************************************/        
function logToServer(...args) {
    fetch('/userWebClient-log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: args })
    });
}

/********************************************************************************
* LocalHost WebSocket Client Event Processing 
*********************************************************************************/   

document.addEventListener('DOMContentLoaded', () => {
    const socket = new WebSocket('ws://' + window.location.hostname + ':8001');

    const msgArea   = document.getElementById('msgArea');
    const tcSelect  = document.getElementById('tcSelect');
    const btnStart  = document.getElementById('Btn_Start');
    const btnStop   = document.getElementById("Btn_Stop");
    const btnClear  = document.getElementById('Btn_Clear');
    const btnSaveLog = document.getElementById('Btn_SaveLog');
    const logCount  = document.getElementById('logCount');
    const descBox   = document.getElementById('msgDescription');
    const messageLayer = document.getElementById("messageLayer");
    const messageText = document.getElementById("messageText");
    const messageIcon = document.getElementById("messageIcon");
    const messageOkBtn = document.getElementById("messageOkBtn");

    let messageCount = 0;

    function appendMsg(line) {
        msgArea.textContent += (msgArea.textContent ? '\n' : '') + line;
        msgArea.scrollTop = msgArea.scrollHeight;
        messageCount++;
        if (logCount) {
            logCount.textContent = messageCount;
        }
    }

    function updateLogCount() {
        const lines = msgArea.textContent.split('\n').filter(line => line.trim() !== '');
        messageCount = lines.length;
        if (logCount) {
            logCount.textContent = messageCount;
        }
    }

    socket.onmessage = (event) => {
        let data;

        try { 
            data = JSON.parse(event.data); 
        } catch {
            return;
        }

        if (data.type === "RESULT" && data.testCase && data.status) {
            //logToServer("[index]RESULT detected:", data);
            if (data.status === "fail") {
                showMessage(`[TEST RESULT] ${data.testCase} failed. ❌\nReason: ${data.reason}`, "fail");
            } else if (data.status === "success") {
                showMessage(`[TEST RESULT] ${data.testCase} passed ✅`, "success");
            } else if (data.status === "stopped") {
                showMessage(`[TEST RESULT] ${data.testCase} Force Stop ⏹`, "stopped");
            } else if (data.status === "guide") {   
                showMessage(`${data.reason}`, "guide", {
                    testCase: data.testCase,
                    testStep: typeof data.testStep === 'number' ? data.testStep : null
                });
            } 
            return;
        }

        // Output log when Ser_Msg is received from server
        if (data.Ser_Msg !== undefined) {
            const line = (typeof data.Ser_Msg === 'string')
                ? data.Ser_Msg : JSON.stringify(data.Ser_Msg);
            appendMsg(line);
        }
    };

    socket.onopen = function() {
        logToServer('[index] WebSocket connection established');
    };

    socket.onclose = function() {
        logToServer('[index] WebSocket connection closed');
    };

/********************************************************************************
* Button Processing ....
*********************************************************************************/ 

  // Sequence data map - dynamically loaded from sequence_map folder
  const sequenceMap = {};
  
  // Load sequence data dynamically
  async function loadSequence(testCase) {
    if (sequenceMap[testCase]) {
      return sequenceMap[testCase];
    }
    
    try {
      const module = await import(`./sequence_map/${testCase}.js`);
      // Try to get sequence data: first try ${testCase}_SEQUENCE, then default export
      const sequenceData = module[`${testCase}_SEQUENCE`] || module.default || module[`${testCase.replace('_CS', '')}_SEQUENCE`];
      if (sequenceData) {
        sequenceMap[testCase] = sequenceData;
        return sequenceData;
      }
      console.warn(`Sequence data not found in module for ${testCase}`);
      return null;
    } catch (error) {
      console.warn(`Sequence data not found for ${testCase}:`, error);
      return null;
    }
  }

  // Generate sequence table HTML
  function generateSequenceTable(sequenceData) {
    let html = '<table class="sequence-table"><thead><tr><th>Step</th><th>EV</th><th>EVSE</th><th>Description</th></tr></thead><tbody>';
    sequenceData.forEach(item => {
      html += `<tr>
        <td class="step-cell">${item.step}</td>
        <td class="ev-cell">${item.ev}</td>
        <td class="evse-cell">${item.evse}</td>
        <td class="desc-cell">${item.description}</td>
      </tr>`;
    });
    html += '</tbody></table>';
    return html;
  }

  // When changed select item, replace image or show sequence table
  tcSelect?.addEventListener('change', async () => {
    const selected = tcSelect.value;
    const descContainer = document.getElementById('msgDescription');
    
    // Check if in DEMO mode and test case is not available
    const licenseMode = window.LICENSE_MODE || 'FULL';
    const availableTests = window.AVAILABLE_TEST_CASES;
    
    if (licenseMode === 'DEMO' && availableTests && !availableTests.includes(selected)) {
      // DEMO mode: Hide description for unavailable test cases
      descContainer.innerHTML = '<div style="padding: 40px; text-align: center; color: #ef4444;"><p style="font-size: 16px; font-weight: 600;">⚠️ This test case is not available in DEMO mode</p><p style="font-size: 14px; margin-top: 10px; color: #6b7280;">Only TC_000~TC_003 are available in DEMO mode.</p></div>';
      descContainer.classList.remove('sequence-mode');
      return;
    }
    
    // Try to load sequence data
    const sequenceData = await loadSequence(selected);
    
    if (sequenceData) {
      // Show sequence table
      descContainer.innerHTML = generateSequenceTable(sequenceData);
      descContainer.classList.add('sequence-mode');
    } else {
      // Show image for test cases without sequence data
      descContainer.classList.remove('sequence-mode');
      const descImage = document.getElementById('descImage');
      if (descImage) {
        descImage.src = `./demo_images/${selected}.jpg`;
      } else {
        // Create image element if it doesn't exist
        descContainer.innerHTML = `<img id="descImage" src="./demo_images/${selected}.jpg" alt="Test Description" style="max-width:100%; max-height:100%; object-fit:contain;">`;
      }
    }
  });

  // Initial value setup
  (async () => {
    const descContainer = document.getElementById('msgDescription');
    if (tcSelect?.value) {
      const selected = tcSelect.value;
      
      // Check if in DEMO mode and test case is not available
      const licenseMode = window.LICENSE_MODE || 'FULL';
      const availableTests = window.AVAILABLE_TEST_CASES;
      
      if (licenseMode === 'DEMO' && availableTests && !availableTests.includes(selected)) {
        // DEMO mode: Hide description for unavailable test cases
        descContainer.innerHTML = '<div style="padding: 40px; text-align: center; color: #ef4444;"><p style="font-size: 16px; font-weight: 600;">⚠️ This test case is not available in DEMO mode</p><p style="font-size: 14px; margin-top: 10px; color: #6b7280;">Only TC_000~TC_003 are available in DEMO mode.</p></div>';
        descContainer.classList.remove('sequence-mode');
        return;
      }
      
      const sequenceData = await loadSequence(selected);
      if (sequenceData) {
        descContainer.innerHTML = generateSequenceTable(sequenceData);
        descContainer.classList.add('sequence-mode');
      } else {
        descContainer.classList.remove('sequence-mode');
        const descImage = document.getElementById('descImage');
        if (descImage) {
          descImage.src = `./demo_images/${selected}.jpg`;
        }
      }
    }
  })();

  // Initial log count update
  updateLogCount();

/********************************************************************************
* Button Processing ....
*********************************************************************************/  

    // START: Clear message area and execute test
    btnStart?.addEventListener('click', () => {
        msgArea.textContent = ''; // Clear
        
        const payload = {
            Test_Status: 'Start',
            Test_Case: (tcSelect?.value || 'TC_001_CS')
        };

        socket.readyState === 1 
            ? socket.send(JSON.stringify(payload)) 
            : appendMsg('[WARN] WS not connected. Cannot start test.');
    });

    // STOP: Stop test execution
    btnStop?.addEventListener('click', () => {
        const selectedCase = tcSelect?.value || "NONE_ITEM";

        const payload = {
            Test_Status: 'Stop',
            Test_Case: selectedCase
        };

        socket.readyState === 1 
            ? socket.send(JSON.stringify(payload)) 
            : appendMsg('[WARN] WS not connected. Cannot stop test.');
    });

    // CLEAR
    btnClear?.addEventListener('click', () => {
        msgArea.textContent = '';
        messageCount = 0;
        if (logCount) {
            logCount.textContent = '0';
        }
    });

    // SAVE LOG
    btnSaveLog?.addEventListener('click', async () => {
        const logContent = msgArea.textContent;
        if (!logContent || logContent.trim() === '') {
            showMessage('No messages to save.', 'fail');
            return;
        }

        try {
            // Request log save to server
            const response = await fetch('/save-log', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: logContent,
                    testCase: tcSelect?.value || 'Unknown',
                    timestamp: new Date().toISOString()
                })
            });

            if (response.ok) {
                const result = await response.json();
                showMessage(`Log saved successfully! ✅\nFile: ${result.filename}\nSaved to: logs/${result.filename}`, 'success');
            } else {
                const error = await response.json();
                showMessage(`Failed to save log: ${error.error || 'Unknown error'}`, 'fail');
            }
        } catch (error) {
            console.error('Save log error:', error);
            showMessage(`Error saving log: ${error.message}`, 'fail');
        }
    });

/********************************************************************************
* Message Layer Control ....
*********************************************************************************/ 
    
    function showMessage(text, type, meta = null) {
        messageText.textContent = text;

        // Set icon
        let icon = '';
        let color = '#000';
        
        if (type === "success") {
            icon = '✅';
            color = '#10b981';
        } else if (type === "fail") {
            icon = '❌';
            color = '#ef4444';
        } else if (type === "stopped") {
            icon = '⏹';
            color = '#f59e0b';
        } else if (type === "guide") {
            icon = '📋';
            color = '#3b82f6';
        }

        if (messageIcon) {
            messageIcon.textContent = icon;
        }
        messageText.style.color = color;

        currentGuideMeta = (type === "guide" && meta && meta.testCase) ? meta : null;
        
        messageLayer.dataset.msgType = type;
        messageLayer.style.display = "flex"; // Show layer
    }

    messageOkBtn.addEventListener("click", () => {
        const isGuide = (messageLayer.dataset.msgType === "guide");
        messageLayer.style.display = "none";

        if (!isGuide) return;

        const testCase = currentGuideMeta?.testCase;
        const testStep = currentGuideMeta?.testStep;

        if (!testCase) {
            logToServer('[index] Guide OK pressed but no currentGuideMeta.testCase');
            return;
        }

        const msg = {
            Test_Status: "Guide_OK",
            Test_Case: String(testCase),
            ...(typeof testStep === "number" ? { Test_Step: testStep } : {})
        };

        try {
            socket.send(JSON.stringify(msg));
        } catch (e) {
            logToServer('[index] Failed to send Guide_OK:', e);
        }

        currentGuideMeta = null;
        delete messageLayer.dataset.msgType;
    });

});


