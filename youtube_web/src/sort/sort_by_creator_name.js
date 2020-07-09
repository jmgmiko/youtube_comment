/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export default function sortCommentByCreatorName(a, b) {
		var nameA = a.creator.toLowerCase().split(" ");
		var nameB = b.creator.toLowerCase().split(" ");
		var limA = nameA.length;
		var limB = nameB.length;
		var lastA = nameA[limA-1];
		var lastB = nameB[limB-1];
		var result = 0;
		if ((lastA < lastB && ((limA > 1 && limB > 1) || (limA === 1 && limB === 1)))|| (lastA === lastB && nameA[0] < nameB[0]) || (nameA[0]<nameB[0] && limB > 1 && limA > 1) || (limB > 1 && limA === 1)){
			result = -1;
		} else if ((lastA < lastB && ((limA > 1 && limB > 1) || (limA === 1 && limB === 1))) || (lastA === lastB && nameA[0]>nameB[0]) || (nameA[0]>nameB[0] && limB > 1 && limA > 1) || (limB > 1 && limA === 1)){
			result = 1;
		}
		return result;
}

