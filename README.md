# InetCare DoctorAI Project Documentation

## Project Purpose

The DoctorAI project aims to reduce Kenya's disease burden by providing real-time access to localized clinical information. The system is designed to address inconsistencies in clinical diagnoses across facilities and practitioners. By enabling clinicians to share and access standardized diagnoses and prognoses, the system mitigates variability in healthcare delivery. It offers uniform, evidence-based disease diagnosis and prognosis informed by data inputted by healthcare workers across Kenya.

Medical errors and delayed interventions can be life-threatening, especially where specialist consultation is unavailable. This system fills the gap of a unified, national reference point for medical conditions by serving as a single, authoritative repository of clinical knowledge and decision support.

The system is powered by nationally recognized medical standards and guidelines, including:

*   Kenya Essential Medicines List (KEML)
*   Kenya Standard Treatment Guidelines
*   Kenya Expanded Programme on Immunization (KEPI)
*   Kenya HIV Treatment Guidelines
*   Kenya Malaria Treatment Guidelines

To build and validate this system, a robust challenge dataset was assembled, comprising 400 real-world clinical vignettes that reflect the complexity of frontline care in Kenya. These vignettes span maternal, pediatric, and critical care scenarios and have been evaluated by expert clinicians alongside leading AI models. This unique testbed enables the system to learn from both human expertise and advanced machine reasoning, creating a powerful tool for clinical decision support.

By harmonizing diagnosis practices and enhancing access to standardized treatment protocols, this system stands to revolutionize healthcare delivery in Kenya—improving quality of care, reducing preventable morbidity and mortality, and ultimately lowering the national disease burden.

## Project Layout

The project is structured to separate the application's logic, configuration, and static assets. Here's a breakdown of the key directories:

-   `src/`: Contains the source code for the application.
    -   `actions/`: Defines the actions that the API can perform, such as user sign-in, sign-up, and accessing clinical information.
    -   `config/`: Includes configuration files for the application, such as API settings, Redis connection, and routing.
    -   `models/`: Defines the data models used in the application, such as the User model.
    -   `types/`: Contains TypeScript type definitions, including clinical types specific to the Kenyan context.
-   `public/`: Contains static assets served by the application, such as HTML pages for sign-in, sign-up, and the chat interface, as well as CSS and images.
-   `__tests__/`: Contains test files for the application's functionality.
-   `package.json`: Defines the project's dependencies and scripts for running the application.
-   `tsconfig.json`: Configures the TypeScript compiler.
-   `.idx/`: Contains configuration files for the development environment.
-   `.vscode/`: Contains settings for the VS Code editor.



## API Usage
Once the application is running, you can test the API endpoints locally by accessing them through `localhost`. The API documentation, which details all available endpoints, is available via Swagger at `/public/swagger.html`.

## API Usage

Database configurations are for Redis Server

The API documentation is available via Swagger at `/public/swagger.html`. Key API endpoints include for localhost http://localhost:8080//public/swagger.html:

-   `/signup`: For user registration.
-   `/signin`: For user authentication.
-   `/doctor`: For accessing clinical decision support functionalities.
  

To run the APIs, use the following command: `npm start`

