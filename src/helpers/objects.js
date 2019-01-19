 export const simpleClone = function(obj, deep = true) {
	if (!obj) {
		return obj;
	}

	var bObject, v, k;
	bObject = Array.isArray(obj) ? [] : {};
	for (k in obj) {
		v = obj[k];
		bObject[k] = deep && (typeof v === "object") ? simpleClone(v) : v;
	}

	return bObject;
}