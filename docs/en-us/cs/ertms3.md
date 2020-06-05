# Modelling the Hybrid ERTMS Level 3 in UML-B

We used UML-B to model and verify the safety of a new European railway specification, Hybrid ERTMS Level 3. The specification is for a new kind of control system that will allow new trains that can communicate their position, to operate alongside older trains that rely on track detection equipment.

The control system splits the existing track sections into virtual sections so that the newer trains can be run at closer intervals, but reverts to using track detection in the presence of older rolling stock. We used UML-B class diagrams to model the relationships between trains and track sections and state-machines to model the state of trains. Our model was constructed using nine refinement levels, culminating in a UML-B state-machine representing the control system of the specification.

The European railway specification was improved as a result of our verification results because we were unable to prove some safety properties in the initial version of the specification.

The ERTMS specification contains example scenarios to explain the meaning of the specification. In order to check that our UML-B model reflects the behaviour described in the specification, we have developed a behaviour driven method and tools for animating scenarios in our model.

Using the Scenario Checker the tester chooses external events in the environment, while internal control events run automatically in response. The scenarios can be saved and replayed to efficiently demonstrate the model behaviour at different levels of abstraction.