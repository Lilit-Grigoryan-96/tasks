class Calculator{
	add(a, b){
		return a+b;
	}
	subtract(a, b){
		return a-b;
	}
	multiply(a, b){
		return a*b;
	}
	divide(a, b){
		return a/b;
	}
}

const calculator = new Calculator();

calculator.add(10, 5);
console.log(calculator.add(10, 5))




class Person{
	constructor(name, age){
		this.name= name;
		this.age = age;
	}

	compareAge(...obj){
		if(this.age > obj[0].age){
			return obj[0].name + " is younger than me.";
		}
		else if(this.age == obj[0].age){
			return obj[0].name + " is the same age as me.";
		}
		else{
			return  obj[0].name + " is older than me.";
		}
		
	}

}
const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p3));



class Man{
	constructor(name, age, stomach){
		this.name= name;
		this.age = age;
		this.stomach = stomach;
	}
	eat(...food){
		
		if(food.length<=10){

			this.stomach.push(food);
			food.forEach(el=>{
				this.stomach.push(el);
			})


		}
		else{
			this.poop()
		}
	}
	poop(){
		this.stomach.length =0;
	}
	toString(){
		return this.name + ', ' + this.age

	}
}
const man = new Man('Arsen', 18, []);


man.eat("someFood");
console.log(man.toString());



