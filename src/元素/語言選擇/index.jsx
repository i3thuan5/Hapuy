const 語言選擇=()=>{
	switch(window.location.hostname.split(',')[0]) {
	    case 'lamal':
	        return 'Pangcah'
	        break;
	    case 'hapoy':
	        return 'SaySiyat'
	        break;
	    case 'sapuz':
	        return 'Bunun'
	        break;
	    case 'puniq':
	        return 'Atayal'
	        break;
	    default:
	        return 'Pangcah'
	} 
}

export default 語言選擇;