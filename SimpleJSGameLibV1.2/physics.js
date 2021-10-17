
function getCollision (pos1, size1, pos2, size2) {
	let res = true;
	for (let i = 0; i <= 1; i++) {
		const overlap = ((Math.abs(size1.get(i)) + Math.abs(size2.get(i))) * 0.5)-
		Math.abs(pos1.get(i) - pos2.get(i));

		if (overlap <= 0) res = false;
	}
	return res;
}

function outOfCollider (pos1, size1, pos2, size2, axis) {

	let dist = pos2.get(axis) - pos1.get(axis);
	let dir =0;
	if (dist > 1)
		dir = 1;
	else
		dir = -1;

	const combSize = (Math.abs(size1.get(axis)) + Math.abs(size2.get(axis))) * 0.5;
	pos1.set(pos2.get(axis) - (combSize * dir),axis);
}
