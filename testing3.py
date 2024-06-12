from selenium import webdriver
import unittest
from selenium.webdriver.common.by import By
import time

class TestVehicleRegistration(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_vehicle_registration(self):
        driver = self.driver
        driver.get("http://localhost:3000/login")
        driver.find_element(By.ID, "username").send_keys("testuser")
        driver.find_element(By.ID, "password").send_keys("Password123")
        button_login = driver.find_element(By.CSS_SELECTOR, "button.btn.btn-primary")
        driver.execute_script("arguments[0].scrollIntoView(true);", button_login)
    
        driver.execute_script("arguments[0].click();", button_login)

        # after successful login intot the page and will be redirected
        time.sleep(2)
        driver.get("http://localhost:3000/g2")
        
        driver.find_element(By.NAME, "CarDetails.make").send_keys("Toyota")
        driver.find_element(By.NAME, "CarDetails.model").send_keys("Corolla")
        driver.find_element(By.NAME, "CarDetails.year").send_keys("2020")
        driver.find_element(By.NAME, "CarDetails.platNumber").send_keys("XYZ123")
        submit_button = driver.find_element(By.CSS_SELECTOR, "button.btn.btn-primary")
        driver.execute_script("arguments[0].scrollIntoView(true);", submit_button)
        
        #  will click the button
        driver.execute_script("arguments[0].click();", submit_button)
        
        # Waiting for  message to appear
        time.sleep(2)
        success_message = driver.find_element(By.ID, "success").text
        self.assertIn("Please check/update your information.", success_message)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
