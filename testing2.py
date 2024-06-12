from selenium import webdriver
import unittest
from selenium.webdriver.common.by import By
import time


class TestUserLogin(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_user_login(self):
        driver = self.driver
        driver.get("http://localhost:3000/login")
        driver.find_element(By.ID, "username").send_keys("testuser")
        driver.find_element(By.ID, "password").send_keys("Password123")
        # wait 2 second
        time.sleep(2)    
        login_button = driver.find_element(By.CSS_SELECTOR, "button.btn.btn-primary")
        # scroll into view
        driver.execute_script("arguments[0].scrollIntoView(true);", login_button)
        # click the login button here
        driver.execute_script("arguments[0].click();", login_button)
        
    

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
