The following project structure is proposed by the Tack Verification team for complex test bench projects. The structure aims to seperate parameters and libraries from the test logic itself. 

## Test Bench Source Files Categories

We propose to split the test bench source files in the following categories. 

### Test Tools 

The test tools are test function libraries that are either generic or specific to the Device under test or to the equipment used to test it. 

Separating them from the test cases themselves allow the reuse of the tools for different test benches testing the same product or family of products, or using the same equipment It also permits their use outside of the spintop-openhtf context.

The test tools often implement or wrap spintop-openhtf defined plugs. See :ref:`plugs-label`

### Test Cases

The test cases are the functions implementing the test logic. They are loaded by the test bench and executed one after the other. 

Separating the test cases from the rest of the test bench allows the sharing of test cases between different test plans and test benches. It is possible to create test case libraries for use in multiple test benches of the same product or the same familiy of product. For example an Ethernet ping test can be formated for use in a lot of different products test benches. Using test case libraries allows to reduce the duplication of code across all your test benches.

### Test Sequences

The test sequences are groups of test cases that are executed together. In our test bench design practices test sequences are specific to the test bench, and test cases are generic, possibly reused by multiple test benches.

### Test Criteria

The thresholds against which measures are compared to declare a test case PASS or FAIL. In the spintop-openhtf context, the measures module implements the criteria and the comparison against the selected values.

Test criteria can be changed without modifying the test logic of the test bench. Seperating them allows to better track the modfications of one or the other. Also, criteria can be shared between test cases (example a maximum temperature at all steps of the test). Hardcoding them in test cases is therefore not a good practice.

### Test Station Configuration 

The parameters configuring the test station itself, that is parameters changing from station to station and test jig to test jig, such as ip adresses, com port, etc. 

Since multiple test benches can use the same station, and the same ip adresses, com port, etc., the test station configuration should also be shared between the different test benches. When a modification is made on the test station, such as changing the test PC IP address, the changes should be inherited by all test benches through a single update to the test station configuration file.

### Static configuration

The static configuration are the parameters statically configuring the execution of the test plan. They are used to modify the flow of the test without changing the test cases or test tools code itself. The following examples illustrate test parameters that should be defined in the static configuration.

- For a test where there is number of retries permitted for a test step, define the maximum retries number in the static configuration.
- For a test that spans frequencies, define the number of iterations and the tested frequencies in the static configuration.

Separating the static configuration from the test cases allows for the reduction of hardcoded parameters deep in the code, especially if the hardcoded constant is used in several plases. It permits the modification of the parameters in a central configuration file.

### Product Definition

Some test benches are built for families of products which vary slightly from version to version. The product definition is the static configuration which defines the product's parameters. 

Separating the product definition from the test sources makes sure that the version particularities are not hardcoded in the test logic. This permits the easier addition of new prooduct versions in the future. 

Typically one configuration file is specified per product version. This configuration file is imported once the product versions has been determined in the trigger phase.


<br/>

## Proposed Single-Repository Structure

Let's explore the single-repository test bench structure as proposed by the Tack Verification team. This proposed stucture is meant to guide the test bench developpers in the layout of thier sources, not to restrict them in any way. We propose to use it when the aim is to implement a single test bench for a single product.

As implied, the file structure is implementented in a single Git repository. A folder is created for each of the source categories explained above.

```
repository
│   main.py: Calls and runs the test bench. 
│ 
└───criteria: The criteria folder holds the global criteria for the test bench. 
│   │         Sequence specific criteria can be defined at the sequence level.
│   │   global_criteria.py
│
└───products: Each python file defines a different product through its static parameters.  
│   │   product_A.py
│   │   product_B.py
│   │   product_C.py
│
└───station_config: Each .yml file defines a different test station. 
│   │   station_1.py
│   │   station_2.py
│
└───static_config: The static config folder holds the product-independent static configuration for
│   │              the test bench as a whole. Each sequence uses its own static configuration as well.
│   │   static_config.py
│
└───test_cases: The functions that implement the test cases are defined in test case libraries. 
│   └───lib_A
│   │   │   cases_A1.py
│   │   │   cases_A2.py
│   │
│   └───lib_B
│   └───lib_C
│
└───test_sequences: The sequences are separated in folders which hold the sequence and test cases 
│   │               declarations, the static configuration and the criterion specific to the sequence.
│   └───sequence_A
│   │   │   sequence_A.py
│   │   │   A_static_config.py
│   │   │   A_criteria.py
│   │
│   └───sequence_B
│   │   │   sequence_B.py
│   │   │   B_static_config.py
│   |   │   B_criteria.py
│
└───test_tools: The test tools that are used to implement the test cases are defined in tool libraries.
    └───lib_A
    │   │   tools_A1.py
    │   │   tools_A2.py
    │
    └───lib_B
    └───lib_C
```

        
## Proposed Multiple-Repository Structure

Let's explore the multiple-repository structure proposed by the Tack Verification team. Once again, the proposed structure is meant to guide, not to restrict. We propose to use it when multiple test benches are developped for a product family with multiple different versions.

The following example illustrates a set of test benches implementing the tests of a family of products. Product A and B are tested by the same set of 3 test benches which are run one after the other. Product C which is in the same product family as products A and B, is tested by a dedicated testb bench. It will however use the same test stations and test case libraries as the other products.

![Multi-Repository Structure](img/MultiRepo.png)


### Test Bench Repository

At the top level of the repository architecture are the test bench repositories. The test case and tool libraries have been removed from the repository, as well as the test station configuration and product. 

Each repository implements a specific test for a product or set of products. 

```
repository
│   main.py: Calls and runs the test bench. 
│ 
└───criteria: The criteria folder holds the global criteria for the test bench. 
│   │         Sequence specific criteria can be defined at the sequence level.
│   │   global_criteria.py
│
└───static_config: The static config folder holds the product-independent static configuration for
│   │              the test bench as a whole. Each sequence uses its own static configuration as well.
│   │   static_config.py
│
└───test_sequences: The sequences are separated in folders which hold the sequence and test cases 
    │               declarations, the static configuration and the criterion specific to the sequence.
    └───sequence_A
    │   │   sequence_A.py
    │   │   A_static_config.py
    │   │   A_criteria.py
    │
    └───sequence_B
        │   sequence_B.py
        │   B_static_config.py
        │   B_criteria.py


```

### Test Station Configuration Repository

The test station configuration files are defined in a separate repository because any of the 4 test benches from our example can use any of the test stations. It prevents the duplication of information and allows the test bench maintainer to modify a single file when a station is modified instead of having to correct the file in each test bench repository.

```
repository
│   main.py: Calls and runs the test bench. 
│ 
└───station_config: Each .yml file defines a different test station. 
    │   station_1.py
    │   station_2.py

```

### Product Definition Repository

The production definition configuration files are defined in a separate repository because any of the 4 test benches from our example can test one product or the other. It prevents the duplication of information and allows the test bench developper to modify a product definition in a single file which will impact all test benches. 

```
repository
│   main.py: Calls and runs the test bench. 
│ 
└───products: Each python file defines a different product through its static parameters.  
    │   product_A.py
    │   product_B.py
    │   product_C.py

```

### Test Cases Library Repository

The test case libraries are imported by the test benches to be called by their sequences. Their implementation is made independent from the spintop-openhtf context, meaning that the definition of the test cases as spintop-openhtf phases is made in the sequences of the test bench repository. This allows the test case implementations in this repository to be used outside of a spintop-openhtf test bench, for example as a standalone debugging python executable.


```
repository
│   main.py: The main in the test case repository is used to test or use the test cases 
│            outside of a spintop-openhtf test bench.  
│ 
└───test_cases: The functions that implement the test cases are defined in test case libraries. 
    └───lib_A
    │   │   cases_A1.py
    │   │   cases_A2.py
    │
    └───lib_B
    └───lib_C

```

The following is an example of the definition of a test case in a library and how the a test sequence from the test bench repository calls it.

![Multi-Repository Structure](img/MultiRepo.png)

```python
# From the test bench repository
import test_case_lib 
sequence = TestSequence('Sleep Sequence')
@sequence.testcase('Test #1 - Sleep Test') # Defines test #1 of the test bench.
def Test1_Sleep(test):
    """Waits five seconds"""
    test_case_lib.sleep_test(sleep_time=5)
```

```python
# From a test case library

def sleep_test(sleep_time=5)
    sleep(sleep_time)
    
```

As can be seen, the spintop-openhtf test case is defined in the test bench repository. This allows its definition as test case #1 and its documentation to make sense in the test bench context. Defining the spintop-openhtf test case in the test case library would mean that the test would have to be test #1 of every test bench that used it.


### Test Tools Library Repository

The test tools libraries implement functions that control and monitor the product of the equipment around it. They can be implemented as plugs and can wrap plugs from the spintop-openhtf tool libraries. They can be imported and used by the test case libraries or directly by the test bench repository. The test tools are meant to be usable outside of a spintop-openhtf test bench.

```
repository
│   main.py: The main in the tools repository is used to test or use the tools
│            outside of a spintop-openhtf test bench.  
│ 
└───test_tools: The test tools that are used to implement the test cases are defined in tool libraries.
    └───lib_A
    │   │   tools_A1.py
    │   │   tools_A2.py
    │
    └───lib_B
    └───lib_C

```


### Unit-testing and Debugging

The proposed structure facilitates the use of unit tests to verify test cases and test tools before a version is ready to be used in a test bench. It also helps the implementation of complete debugging tools using both libraries and bypasssing the test bench entirely. 

The following image showcases the different entry points of the test case and test tool library usage. 
![Multi-Repository Entry Points](img/entrypoints.png)

Each library is callable from 

- the test bench itself
- the debugging tools to help debug failing units
- the unit test implementation
- the repository main which is used for development and debugging of the llbrary itself

### Notes on Multiple-Repository Structure

#### Import

We do not specify here the methods of linking the different repositories. This could be done by defining git submodules, or by serving a pypi server hosting the repositories. It is outside the scope of spintop-openhtf and is up to the developer. 

#### Versioning

Versioning is of great importance in the case of a multiple-repository structure. Since the test bench can remain the same but its underlying libraries and tools can change, it is imperative that the repositories under the test bench be versioned and that only the required and tested version of these repositories be installed in a deployment or an update.

#### Unit tests

For the test case and test tool libraries, we believe it is a good practice to create a unit test structure to validate new commits of these repositories and create a new version importable by the test benches.



