export function loadUrl ( method, url, init, data, success, error ) {
	const xmlhttp = new XMLHttpRequest()
	xmlhttp.open( method, url, true )

	if ( init ) {
		init( xmlhttp )
	}

	xmlhttp.onreadystatechange = function () {
		if ( xmlhttp.readyState === 4 && xmlhttp.status === 200 ) {
			if ( success ) {
				success( xmlhttp )
			}
		} else if ( !xmlhttp.status || xmlhttp.status >= 400 ) {
			if ( error ) {
				error( xmlhttp )
			}
		}
	}

	xmlhttp.send( data )
}

export function jsonPatchRequest ( method, url, data, success, error ) {
	return loadUrl( method, url, xmlhttp => {
		xmlhttp.setRequestHeader( 'Content-Type', 'application/json-patch+json' )
		// xmlhttp.setRequestHeader("Content-Encoding", "gzip");
	}, data, success, error )
}
