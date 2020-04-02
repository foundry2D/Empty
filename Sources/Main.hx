package;

import found.Found;

class Main {

	public static var sha = utilities.BuildMacros.sha().substr(1, 7);
	public static var date = utilities.BuildMacros.date().split(" ")[0];

	public static function main(){
		//To see the whole FoundConfig, go have a look at Found.hx in foundry2d library
		Found.setup({app:Project, title:'Foundry2d'});
	}
}