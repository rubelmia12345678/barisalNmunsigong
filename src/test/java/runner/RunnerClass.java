package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
plugin= {"pretty","html:target/cucumber-reports", "json:target/cucumber.json"},
	snippets=SnippetType.CAMELCASE,
	glue= {"StepDefination"},
	features = "./src/test/resources/search.feature",
	//tags= {"@abc"},
	monochrome = true,
	strict = true,
	dryRun = false
	)

public class RunnerClass extends AbstractTestNGCucumberTests{
	
	

}
