package StepDefination;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import PageFactory_Demo.ObjectRepository;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class All_Steps {
	WebDriver driver;
	ObjectRepository pf;
	
	@Given("^open the browser$")
	public void open_the_browser() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@When("^pass the url \"([^\"]*)\"$")
	public void pass_the_url(String URL) throws Throwable {
	   driver.get(URL);
	}

	@When("^send the search keyword$")
	public void send_the_search_keyword() throws Throwable {
		pf = PageFactory.initElements(driver, ObjectRepository.class);
		pf.getSearchBox().get(0).sendKeys("selenium");
		
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("window.scrollBy(0,100)");
	  
	}

	@When("^searc should be appeared$")
	public void searc_should_be_appeared() throws Throwable {
		pf.getSearchBtn().get(0).click();
	   
	}
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.quit();		
	}
}
