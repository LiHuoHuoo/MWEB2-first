var moduleb = (function()
{
	var a = 100;
	var b = "Vue";
	
	function cc()
	{
		console.log("我是b.js的代码")
	}
	
	cc();
	
	module.exports = 
	{
		a,
		b,
		cc
	}
})()