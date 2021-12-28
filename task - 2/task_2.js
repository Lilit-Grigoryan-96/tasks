const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");


let pagination = Object.create({},{
	arr:{
		value: alphabetArray,
	},
	currentPage: {
		value:	4,
		writable: true
	},
	getPageItems : {
		get(){
			return this.arr;
		}
	},
	nextPage : {
		get(){
			return this.currentPage+1;
		}
	},
	prevPage : {
		get(){
			return this.currentPage-1;
		}
	},
	goToPage : {
		set(value){
			this.currentPage = value;
		}
	}


})

pagination.goToPage =6;
 console.log(pagination);


 let airplane = Object.create({},{
 	name: {
 		value: 'Airplane'
 	},
 	isFlying: {
 		value: true,
 		writable: true
 	},
 	takeOff : {
		set(value){
			this.isFlying = value;
		}
	},
	land : {
		set(value){
			this.isFlying = !value;
		}
	}

 })
 
airplane.takeOff=false;

console.log(airplane)