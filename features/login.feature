Feature: The Internet Swag Labs Website

  Scenario Outline: User can log into the secure area

    Given User on the login page
    When User logins with <username> and <password>
    Then User should see <result>

    Examples:
      | username      | password         | result                                        |
      | standard_user | secret_sauce     | URL should be /inventory.html                 |
      | invalid_user  | secret_sauce     | "Username and password do not match any user" |
      | standard_user | invalid_password | "Username and password do not match any user" |
