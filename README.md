# Empty

To start a Foundry Project from scratch clone this repo:

`git clone https://github.com/mundusnine/Empty.git`


Then cd into Empty/Libraries:

`cd Empty/Libraries`

While in Libraries folder clone the foundsdk:

`git clone --recursive https://github.com/mundusnine/foundsdk.git`

To make sure everything is there, cd into foundsdk and:
```
cd foundsdk
git submodule foreach git pull origin master
git submodule update --init --recursive

```

Don't forget to specify in vscode the path to your Up to date Kha repo.
