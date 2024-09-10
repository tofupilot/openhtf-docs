from tofupilot import TofuPilotClient

client = TofuPilotClient(
    api_key="24b0cd58-b72f-49ed-89cc-c022d05b5b30", base_url="http://localhost:3000"
)

client.import_log("./test_result2.json")
