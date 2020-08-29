var modulea = (function()
{
	var a = 10;
	var b = "某人";
	function aa()
	{
		console.log("我是a.js的代码")
	};
	
	aa()
	
	module.exports = 
	{
		a,
		b,
		aa
	}
})()