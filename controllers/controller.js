import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'
//get all questions

export async function getQuestions(req, res) {

    //res.json("question api get request");
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }

}


//insert all questions

export async function insertQuestion(req, res) {

    //res.json("question api post request ");

    try {
        Questions.insertMany({ questions, answers }).then(function (err, data) {
            res.json({ msg: "Data Saved Successfully...." })
        })
    } catch (error) {
        res.json({ error })
    }

}



//delete all questions


export async function dropQuestion(req, res) {

    // res.json("question api delete request ");

    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully....!!!" })
    } catch (error) {
        res.json({ error })
    }

}

//get all result

export async function getResult(req, res) {

    //res.json("result api get request ");

    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }

}


//post all result

export async function storeResult(req, res) {

    //res.json("result api post request ");

    // try {
    //     const { username, result, attempts, points, achieved } = await req.body;
    //     if (username && !result) throw new Error('Data Not Provided...!');

    //     Results.create({ username, result, attempts, points, achieved }, function (err, data) {
    //         res.json({ msg: "Result Saved Successfully..!" })
    //     })
    // } catch (error) {
    //     res.json({ error })
    // }

    // async function storeResult(req, res) {
    try {
        // Assuming you have a Result model defined
        const result = await Results.create(req.body); // Assuming req.body contains the data

        // Do something with the result, send response, etc.
        res.status(200).json({ message: 'Result stored successfully' });
    } catch (error) {
        // Handle error appropriately
        console.error(error);
        res.status(500).json({ message: 'Error storing result' });
    }
    // }


}


//delete all result


export async function dropResult(req, res) {

    // res.json("result api delete request ");

    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }


}
