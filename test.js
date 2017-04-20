function convertToRoman(num){
	var retRoman = '';
	var count;
	var conversionTable = [
		[1, 3, 1, 'I'],
		[4, 4, 4, 'IV'],
		[5, 8, 5, 'V'],
		[9, 9, 9, 'IX'],
		[10, 39, 10, 'X'],
		[40, 49, 40, 'XL'],
		[50, 89, 50, 'L'],
		[90, 99, 90, 'XC'],
		[100, 399, 100, 'C'],
		[400, 499, 400, 'CD'],
		[500, 899, 500, 'D'],
		[900, 999, 900, 'CM'],
		[1000, 4000, 1000, 'M']
	];
	
	pointer = 12;
	if (num > conversionTable[pointer][1]){
		return 'numeric overflow';
	}
	while (pointer >= 0) {
		if (num >= conversionTable[pointer][0] && num <= conversionTable[pointer][1]){
			count = Math.floor(num / conversionTable[pointer][2]);
			num = num - (count * conversionTable[pointer][2]);
			retRoman += conversionTable[pointer][3].repeat(count);
		}
		
		pointer--;
	}
	return retRoman;
}
