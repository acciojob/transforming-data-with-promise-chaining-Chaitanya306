//your JS code here. If required.
let ip=document.getElementById("ip")
let btn=document.getElementById("btn")
let op=document.getElementById("output")

function display(){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			op.textContent=`Result: ${ip.value}`
			res(Number(ip.value))
		},2000)
	})
}
function multiply(num){
	return new Promise((res,rej)=>{
		num=num*2
		setTimeout(()=>{
			op.textContent=`Result: ${num}`
			res(num)
		},2000)
	})
}
function substract(num){
	return new Promise((res,rej)=>{
		num=num-3
		setTimeout(()=>{
			op.textContent=`Result: ${num}`
			res(num)
		},1000)
	})
}
function divide(num){
	return new Promise((res,rej)=>{
		num=num/2
		setTimeout(()=>{
			op.textContent=`Result: ${num}`
			res(num)
		},1000)
	})
}
function add(num){
	return new Promise((res,rej)=>{
		num=num+10
		setTimeout(()=>{
			op.textContent=`Result: ${num}`
			res(num)
		},1000)
	})
}
btn.addEventListener('click',async function(){
	const p1=await display()
	const p2=await multiply(p1)
	const p3=await substract(p2)
	const p4=await divide(p3)
	const p5=await add(p4)
	
})