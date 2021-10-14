export const objExact = <
	T extends { [index: string]: unknown },
	Y extends { [index in keyof T]: unknown }
>(
	dummyObject: T,
	targetObject: Y
) => {
	const newObj: { [prop: string]: unknown } = {}
	for (const prop in dummyObject) {
		newObj[prop] = targetObject[prop]
	}
	return newObj as { [K in keyof T]: Y[K] }
}
