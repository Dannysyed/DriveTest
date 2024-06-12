from selenium import webdriver
import unittest
from selenium.webdriver.common.by import By
import time

class TestUserRegistration(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_user_registration(self):
        driver = self.driver
        driver.get("http://localhost:3000/signup")
        driver.implicitly_wait(10) 

        # Filling out the singup form
        driver.find_element(By.NAME, "username").send_keys("val")
        driver.find_element(By.NAME, "password").send_keys("Password123")
        driver.find_element(By.NAME, "Cpassword").send_keys("Password123")
        
        # Selecting user type from the dropdown
        user_type_dropdown = driver.find_element(By.NAME, "userType")
        for option in user_type_dropdown.find_elements(By.TAG_NAME, 'option'):
            if option.text == 'Driver':
                option.click()
                break    
        time.sleep(2)    

        # Submit the form
        driver.find_element(By.CSS_SELECTOR, "button.btn.btn-primary").click()
        driver.implicitly_wait(3)
    def tearDown(self):
        self.driver.quit() 

if __name__ == "__main__":
    unittest.main()