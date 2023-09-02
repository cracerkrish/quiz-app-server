import { Router } from "express";
const router = Router();


// import controllers

import * as controller from '../controllers/controller.js';

//Questions Route API

router.route('/questions')

    .get(controller.getQuestions) //get req
    .post(controller.insertQuestion) //post req
    .delete(controller.dropQuestion)  //delete req

router.route('/result')
    .get(controller.getResult)
    .post(controller.storeResult)
    .delete(controller.dropResult)


export default router;