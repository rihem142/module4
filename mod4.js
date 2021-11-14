var names=new Array();
names[0]="Yosri";
names[1]="jane";
names[2]="omar";
names[3]="jackson";
names[4]="michel";
names[5]="celine";
names[6]="maria";
names[7]="bruno";
names[8]="paul";
names[9]="jack";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
