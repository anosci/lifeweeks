everay = [];
eraray = [];
function ret0if(thisIsUndefined){
	return typeof thisIsUndefined==="undefined"?0:thisIsUndefined;
}
Date.prototype.getWeek = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}
function createeve(e,n,t,label,desc,tags){
	everay.push(new eve())
	everay[everay.length-1].setDate(e,n-1,t)
	everay[everay.length-1].label = label
	if(ret0if(desc)!=0){
		everay[everay.length-1].desc = desc
	}
	if(ret0if(tags)!=0){
		everay[everay.length-1].setTags(tags)
	}
}
function createera(fromeve,toeve,label,color,desc,tags){
	eraray.push(new era())
	eraray[eraray.length-1].label = label
	eraray[eraray.length-1].range = [fromeve,toeve]
	if(ret0if(color)!=0){
		eraray[eraray.length-1].color = color
	}
	if(ret0if(desc)!=0){
		eraray[eraray.length-1].desc = desc
	}
	if(ret0if(tags)!=0){
		eraray[eraray.length-1].setTags(tags)
	}
}
function getevefromlabel(label,year,month,day){
	asd = null;
	for(q=0;q<everay.length;q++){
		if(everay[q].label==label){
			if(ret0if(year)!=0){
				if(everay[q].getDate().getFullYear()==year){
					asd = everay[q]
				}
			}else{
				asd = everay[q]
			}
		}
	}
	return asd;
}
function eve(){
	this.label="event";
	this.desc = "";
	this.tags = [];
	this.date = new Date();//year month day hour minute
	this.setDate = function(yr,mo,d){
		d = ret0if(d)//the only optional bit
		this.date.setFullYear(yr)
		this.date.setMonth(mo)
		if(d!=0){
			this.date.setDate(d)
		}
	}
	this.getDate = function(y){
		return this.date
	}
	this.setTags = function(t){
		//split t into array, cycle through.
		sub1 = t.split(",");
		for(q=0;q<sub1.length;q++){
			this.tags[sub1[q]]=1
		}
	}
}
function era(){
	this.label="era";
	this.desc = "";
	this.tags = [];
	this.range = [];
	this.drawme = false;	//future implimentation: list eras, select which ones to draw, and toggle this flag. 
	this.color = "006";
	this.setRange = function(beg,end){
		this.range = [beg,end]
	}
	this.setTags = function(t){
		//split t into array, cycle through.
		sub1 = t.split(",");
		for(q=0;q<sub1.length;q++){
			this.tags[sub1[q]]=1
		}
	}
}

function gid(id){
	return document.getElementById(id);
}
function drawtable(){
	cout =""
	for(y=0;y<90;y++){
		cout+='<div class="leftside">year '+y+'</div>'
		for(x=0;x<52;x++){
			skipme = false;
			thisblock = new Date(getevefromlabel("%begin").date.getFullYear()+y,getevefromlabel("%begin").date.getMonth(),getevefromlabel("%begin").date.getDate());
			thisblock = new Date(Date.parse(thisblock) + 1000*60*60*24*7*x)
			for(z=0;z<eraray.length;z++){
				if(eraray[z].range[0].date<=thisblock){
					//years line up. now see if there's an offset (i.e., begin at jan1 or begin at birthday)
					if(eraray[z].range[1].date>=thisblock){
						if(eraray[z].label != "uneventful life"){
							alert((eraray[z].range[0].label) )
						}
						//color time
						cout+='<div class="bg0" style="background-color:#'
						cout+=eraray[z].color;
						cout+=';">'
						skipme=true;
						break;
					}
				}
			}
			if(!skipme){
				cout+='<div class="bg0">'
			}
			cout+='<div class="w">'
			cout+='</div>'
			cout+='</div>'
		}
		cout+='<br class="cl">'
	}
	gid("field").innerHTML=cout;
}
createeve(1990,1,1,"%begin","","meta")

