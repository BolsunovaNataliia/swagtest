Feature: The Internet Swag Labs Website

  Scenario Outline: User can log into the secure area

    Given User on the login page
    When User logins with <username> and <password>
    Then User should see <result>

    Examples:
      | username      | password         | result                                                                      |
      | standard_user | secret_sauce     | URL should be /inventory.html                                               |
      | invalid_user  | secret_sauce     | "Epic sadface: Username and password do not match any user in this service" |
      | standard_user | invalid_password | "Epic sadface: Username and password do not match any user in this service" |
