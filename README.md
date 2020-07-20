# Empty

To start a Foundry Project from scratch or to work on Foundry Editor developpement clone this repo:

`git clone https://github.com/mundusnine/Empty.git`
 
 or download the zip an copy the contents in your projects git repo

Then cd into Empty/Libraries:

`cd Empty/Libraries`

While in Libraries folder clone the foundsdk:

`git clone --recursive https://github.com/mundusnine/foundsdk.git`

To make sure everything is there, cd into foundsdk and:
```
cd foundsdk
//For developement to get the most up to date 
git submodule foreach git pull origin master
//To get the stable release version of the SDK
git submodule update --init --recursive

```

Don't forget to specify in vscode the path to your Up to date Kha repo.
