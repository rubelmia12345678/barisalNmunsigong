package PageFactory_Demo;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ObjectRepository {
	
		
		@FindBy(xpath="//*[@class='gLFyf gsfi']")
		private List<WebElement> searchBox;
		
		@FindBy(xpath="(//*[@class='gNO89b'])[1]")
		private List<WebElement> searchBtn;

		public List<WebElement> getSearchBtn() {
			return searchBtn;
		}
		public List<WebElement> getSearchBox() {
			return searchBox;
		}
		
	}



