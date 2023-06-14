export const studentController = (req, res) => {
    res.send('wellcome students');
}

export const studentDetailsController = (req, res) => {
    res.send('wellcome details students');
}

//1.lay duoc thong tin tu phia client gui len server
//2.check xem thong tin do la dung hay khong
//3.check xem thong tin duoc gui len da dung chua va co ton tai trong db hay khong
//4.thong tin tu phia client gui len duoc luu vao DB
//5.hien thi ve cho user da tao ra
export const createStudentController = (req, res) => {
    console.log('req.body', req.body);
}

