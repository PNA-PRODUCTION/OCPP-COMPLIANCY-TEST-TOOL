# OCPP Test Server

## Overview

This tool supports OCPP 1.6 charger testing. All test cases are based on the "Test case document OCTT for OCPP 1.6" specification.

## Test Coverage

This tool focuses on **Core Profile** test cases for Central System (CS) testing.

### Supported Test Categories

| Category | Test Cases | Status |
|----------|------------|--------|
| **Cold Boot Charge Point** | TC_001_CS | ✅ Supported |
| **Start Charging Session** | TC_002_CS, TC_003_CS, TC_004_1_CS, TC_004_2_CS, TC_005_1_CS, TC_005_2_CS, TC_005_3_CS | ✅ Supported |
| **Stop Charging Session** | TC_010_CS, TC_011_1_CS, TC_011_2_CS, TC_012_CS, TC_013_CS, TC_014_CS, TC_015_CS, TC_016_CS | ✅ Supported |
| **Cache** | TC_017_1_CS, TC_017_2_CS, TC_018_1_CS, TC_018_2_CS | ✅ Supported |
| **Remote Actions (Happy Flow)** | TC_019_CS, TC_021_CS, TC_023_CS, TC_024_CS | ✅ Supported |
| **Resetting (Happy Flow)** | TC_026_CS, TC_027_CS, TC_028_CS | ✅ Supported |
| **Unlocking (Happy Flow)** | TC_030_CS, TC_031_CS, TC_032_1_CS, TC_032_2_CS | ✅ Supported |
| **Configuration (Happy Flow)** | TC_034_CS | ✅ Supported |
| **Meter Values** | TC_036_CS, TC_038_CS | ✅ Supported |
| **Basic Actions (Non-Happy Flow)** | TC_040_1_CS, TC_040_2_CS | ✅ Supported |
| **Remote Actions (Non-Happy Flow)** | TC_042_1_CS, TC_042_2_CS | ✅ Supported |
| **Unlocking (Non-Happy Flow)** | TC_054_CS, TC_055_CS | ✅ Supported |
| **Power Failure (Non-Happy Flow)** | TC_062_CS | ✅ Supported |
| **Offline Behavior (Non-Happy Flow)** | TC_068_CS, TC_069_CS, TC_070_CS, TC_071_CS | ✅ Supported |

### Not Supported Test Categories

The following test categories from the OCTT specification are **not currently supported**:

| Category | Test Cases | Status |
|----------|------------|--------|
| **Configuration (Non-Happy Flow)** | TC_043_CS, TC_044_CS | ❌ Not Supported |
| **Fault Behavior (Non-Happy Flow)** | TC_045_CS | ❌ Not Supported |
| **Local Authorization List** | TC_046_CS, TC_047_CS, TC_048_CS | ❌ Not Supported |
| **Firmware Management** | TC_049_CS, TC_050_CS, TC_051_CS | ❌ Not Supported |
| **Diagnostics** | TC_052_CS, TC_053_CS | ❌ Not Supported |
| **Reservation** | TC_056_CS, TC_057_CS, TC_058_CS, TC_059_CS | ❌ Not Supported |
| **Remote Trigger** | TC_060_CS, TC_061_CS | ❌ Not Supported |
| **Smart Charging** | TC_063_CS, TC_064_CS, TC_065_CS, TC_066_CS, TC_067_CS | ❌ Not Supported |
| **Data Transfer** | TC_072_CS | ❌ Not Supported |
| **Security** | TC_073_CS, TC_074_CS, TC_075_CS, TC_076_CS, TC_077_CS, TC_078_CS, TC_079_CS, TC_080_CS, TC_081_CS, TC_082_CS, TC_083_CS, TC_084_CS, TC_085_CS, TC_086_CS, TC_087_CSMS | ❌ Not Supported |

**Note**: This tool focuses on Core Profile test cases. Extended features such as Firmware Management, Diagnostics, Reservation, Smart Charging, Data Transfer, and Security profiles are not included in the current version.

## How to Run

1. Double-click OCPP_Test_Server.exe to launch the application.
2. Your browser will automatically open and navigate to http://localhost:8000.
3. You can select and execute test cases.

## Important Notes

- Node.js installation is NOT required.
- Compatible with Windows 10 or higher.
- Port 8000 must be open in your firewall.

## Charger Connection

- Configure your charger to connect to the test tool using WebSocket.
- Connection URL format: ws://[Test_PC_IP_Address]
  - Example: ws://192.168.1.100
- Replace [Test_PC_IP_Address] with the actual IP address of the PC running this test tool.
- The charger will connect to port 8000 (WebSocket server).

## Configuration

You can customize the test tool behavior by editing the config.json file.

### Configuration Fields

- **OCPP_heartbeatInterval** (number)
  - Heartbeat interval in seconds for OCPP communication.
  - Default: 15 seconds
  - Example: 30 (for 30-second intervals)

- **OCPP_test_parentIdTag** (string)
  - Parent ID tag used for testing purposes.
  - Default: "PNA"
  - Example: "TEST_COMPANY"

- **validate_ID_Tag** (array of strings)
  - List of valid ID tags for authorization testing.
  - These tags will be accepted during authorization tests.
  - Example: ["1019150239741853", "1010010304096696"]

- **inValidate_ID_Tag** (array of strings)
  - List of invalid ID tags for authorization testing.
  - These tags will be rejected during authorization tests.
  - Example: ["1019150240503375", "222222222222222"]

- **t_TC_XXX_CS** (number)
  - Timeout value in seconds for each test case.
  - Format: t_TC_[TestCaseNumber]_CS
  - Example: t_TC_001_CS: 30 (30 seconds timeout for TC_001)
  - Available test cases: TC_000, TC_001, TC_002, TC_003, TC_004_1, TC_004_2, TC_005_1, TC_005_2, TC_005_3, TC_010 through TC_071

### Editing config.json

1. Open config.json with a text editor.
2. Modify the values according to your testing requirements.
3. Save the file.
4. Restart the OCPP Test Server for changes to take effect.

**Note**: Ensure the JSON syntax is correct. Invalid JSON will cause the application to use default values.

## License

- DEMO Mode: Only TC_000~TC_003 are available.
- FULL Mode: All test cases are available.
- License file (license.lic) is automatically generated.

## Troubleshooting

- If the application doesn't start: Try running as Administrator.

## Contact

For purchase inquiries and technical support, please contact:
- Email: dennis.kim@pnanp.com
