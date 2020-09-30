const 語言選擇=()=>{
	switch(window.location.hostname.split('.')[0]) {
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


const 例句選擇=()=>{
	switch(window.location.hostname.split('.')[0]) {
	    case 'lamal':
	        return 'Maolahay kako tisowanan.'
	        break;
	    case 'hapoy':
	        return 'So\'o kayzaeh ay?'
	        break;
	    case 'sapuz':
	        return 'Mihumisan, uninang.'
	        break;
	    case 'puniq':
	        return 'Lokah su ga?'
	        break;
	    default:
	        return 'O Pangcah kako.'
	}
}

export {例句選擇};
