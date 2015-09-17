everay = [];
eraray = [];
function ret0if(thisIsUndefined){
	return typeof thisIsUndefined==="undefined"?0:thisIsUndefined;
}
function createeve(e,n,t,label,desc,tags){
	everay.push(new eve())
	everay[everay.length-1].setDate(e,n,t)
	everay[everay.length-1].label = label
	if(ret0if(desc)!=0){
		everay[everay.length-1].desc = desc
	}
	if(ret0if(tags)!=0){
		everay[everay.length-1].setTags(tags)
	}
}
function createera(e,n,t,label,desc,tags){
	eraray.push(new era())
	eraray[eraray.length-1].setDate(e,n,t)
	eraray[eraray.length-1].label = label
	if(ret0if(desc)!=0){
		everay[everay.length-1].desc = desc
	}
	if(ret0if(tags)!=0){
		everay[everay.length-1].setTags(tags)
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
		for(x=0;x<65;x++){
			cout+='<div class="bg0">'
			cout+='<div class="w">'
			cout+='</div>'
			cout+='</div>'
		}
		cout+='<br class="cl">'
	}
	gid("field").innerHTML=cout;
}
drawtable()
