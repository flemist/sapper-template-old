export function simpleClone ( obj, deep = true ) {
	if ( !obj ) {
		return obj
	}

	let v
	let	k

	const bObject = Array.isArray( obj ) ? [] : {}
	for ( k in obj ) {
		if ( Object.prototype.hasOwnProperty.call( obj, k ) ) {
			v = obj[k]
			bObject[k] = deep && ( typeof v === 'object' ) ? simpleClone( v ) : v
		}
	}

	return bObject
}
