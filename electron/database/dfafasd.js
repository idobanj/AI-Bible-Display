String.prototype.isPalindrome = function ()
{ 
	let reversedString = this.split('').reverse().join('');
	if (this === reversedString)
	{
		return true;
	}
	else
	{
		return false;
	}
}

console.log("racer".isPalindrome());