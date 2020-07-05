/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export default function sortCommentByCreatorName(a, b) {
        if (a.creator.toLowerCase() < b.creator.toLowerCase()) {
            return -1;
        } else if (a.creator.toLowerCase() > b.creator.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
}

