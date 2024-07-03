.. _results:

## Exploring the Test Results

### Test Result Folder

Each execution of the test bench creates a *test record* is stored on the test station computer. This *test record* is saved in the %localappdata%&#92;tackv&#92;spintop-openhtf&#92;openhtf-history&#92;test-bench-name&#92; folder. For example, C:\&#92;&#92;Users&#92;tack.user&#92;AppData&#92;Local&#92;tackv&#92;spintop-openhtf&#92;openhtf-history\&#92;hello for our **hello** test bench. 

For each *test record* a folder is created with its name formatted as *dut-id_execution-date-and-time_result*. For example, SN01_2020_04_12_213700_409000_PASS is a test for the SN01 unit executed on April 12th which resulted in a global PASS. In the folder are all the results gathered during the test. 

### Test Result JSON file

The main result file is the ***result.json*** file. It holds the result of the test, of all phases, as well as all the logs and the complete measurements with their evaluated criteria.

**Global results**

At the top of the file are the global test results, namely:

- the Device Under Test ID
- the start and end time in Unix epoch time
- the global outcome of the test bench
- the station ID

```json
    "dut_id": "SN01",
    "start_time_millis": 1586727420409,
    "end_time_millis": 1586727435444,
    "outcome": "PASS",
    "outcome_details": [],
    "station_id": "P089",
```


**Metadata**

The metadata section of the results follow. The test name as well as the used test station configuration is logged there. 

```json
    "metadata": {
        "test_name": "Sleep",
        "config": {
            "plug_teardown_timeout_s": 0,
            "allow_unset_measurements": false,
            "station_id": "Tutorial Station",
            "cancel_timeout_s": 2,
            "stop_on_first_failure": false,
            "capture_source": false,
            "capture_docstring": true,
            "teardown_timeout_s": 30,
            "user_input_enable_console": false,
            "frontend_throttle_s": 0.15,
            "station_server_port": "4444"
        }
    },
```

**Phases Results**

The phase results follow where the file logs them as an array

```json
 "phases": [
       ...
    ],
```

For each phase is logged,

- the start and end time in Unix epoch time 
- the phase name (*name*)
- the phase result (*result.phase_result*)
- the phase outcome (*outcome*)

```json
 {
            "measurements": {},
            "options": {
                "name": "Sleep Test 1A",
                "run_under_pdb": false
            },
            "start_time_millis": 1586727420410,
            "end_time_millis": 1586727425412,
            "attachments": {},
            "result": {
                "phase_result": "CONTINUE"
            },
            "outcome": "PASS",
            "descriptor_id": 2136562880584,
            "name": "Sleep Test 1A",
            "codeinfo": {
                "name": "sleep_test_1",
                "docstring": "Waits five seconds",
                "sourcecode": ""
            }
        },
```

The measurements and criteria details are also added with their parameters in case there was one defined for the phase.

- name (measurements.*criterionname*.name)
- outcome  (measurements.*criterionname*.outcome)
- evaluated value (measurements.*criterionname*.measured_value)
- validators (measurements.*criterionname*.validators)

```json
 {
       {
            "measurements": {
                "test_criterion": {
                    "name": "test_criterion",
                    "outcome": "PASS",
                    "validators": [
                        "18 <= x <= 22"
                    ],
                    "docstring": "This measurement helps illustrate the criteria usage in spintop-openhtf",
                    "measured_value": 20
                }
            },
            "options": {
                "name": "Criteria test",
                "run_under_pdb": false
            },
            "start_time_millis": 1586635840894,
            "end_time_millis": 1586635840894,
            "attachments": {},
            "result": {
                "phase_result": "CONTINUE"
            },
            "outcome": "PASS",
            "descriptor_id": 2150767337288,
            "name": "Criteria test",
            "codeinfo": {
                "name": "criteria_test",
                "docstring": null,
                "sourcecode": ""
            }
        }
        
```
**Logs**

Each log entry is kept in the test record. For each log entry are recorded

- the logger name
- the logging level (info, warning, error, etc)
- the source  (source code file and line)
- the timestamp
- the logged message

```json
    "log_records": [
        {
            "level": 10,
            "logger_name": "openhtf.core.phase_executor",
            "source": "phase_executor.py",
            "lineno": 249,
            "timestamp_millis": 1586727409681,
            "message": "Executing phase Configuration"
        },
        {
            "level": 10,
            "logger_name": "openhtf.plugs.user_input",
            "source": "user_input.py",
            "lineno": 369,
            "timestamp_millis": 1586727409683,
            "message": "Displaying prompt (97f2a2ebc7c2491f8b3712efed20f34c): \"{'schema': {'title': 'Test configuration', 'type': 'object', 'required': ['operator, uutid, product'], 'properties': {'operator': {'type': 'string', 'title': 'Enter the operator name'}, 'dutid': {'type': 'string', 'title': 'Enter the device under test serial number'}, 'product': {'type': 'string', 'title': 'Enter the product name'}}}, 'layout': ['operator', 'dutid', 'product']}\""
        },
 
```


## Appending Data to Test Record

In the case your test bench generates a file during its execution, it is possible to add it to the test record. To do so use the test.attach or test.attach_from_file() functions. 

Using the test.attach() function as below will create a file name ***test_attachment*** which holds *This is test attachment data.* as text data in the test record folder.
```python
test.attach('test_attachment', 'This is test attachment data.'.encode('utf-8'))
```

Using the test.attach_from_file() function as below will take a previously generated data file named ***example_attachment.txt*** and move it to the test record folder.
```python
test.attach_from_file( os.path.join(os.path.dirname(__file__), 'example_attachment.txt'))
```

Create the ***example_attachment.txt*** file in the folder holding your test bench main, and add both lines to one of your test cases. Run the test bench and verify that the new test run has saved the test data correctly.


### Loading Data from a Test Record File

Once a file has been saved in the test record, it becomes accessible from the source code. The ***test.get_attachment()*** function allows the loading of a test record file. Add the following to your test case to load the file created above by the ***test.attach*** function. 

```python
test_attachment = test.get_attachment('test_attachment')
print(test_attachment)
```

You should see that the content of the ***test_attachment*** file has been printed in the console, that is 'This is test attachment data.'.



:download:`Tutorial source <../tutorials/main_attachment.py>`


:download:`Attachment file <../tutorials/example_attachment.txt>`
