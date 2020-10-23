const express = require('express');
const { route } = require('../app');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req,res,next) => {
    mysql.getConnection((error,conn)=>{
        if(error){return res.status(500).send({ error:error }) }
        conn.query(
            'SELECT * FROM produto',
            (error,resultado,fields)=>{
                if(error){return res.status(500).send({ error:error }) }
                return res.status(200).send({
                    response:resultado
                });
            }
        );
    });
});

router.post('/', (req,res,next) => {
    mysql.getConnection((error,conn) =>{
        if(error){return res.status(500).send({ error:error }) }

        if(req.body.preco == null || req.body.nome == null || req.body.descricao == null){
            return res.status(404).send({
                response:"preencha os dados corretamente"
            });
        }
        
        conn.query(
            'INSERT INTO produto (nome,preco,descricao,foto) VALUES (?,?,?,?)',
            [req.body.nome,
                req.body.preco,
                req.body.descricao,
                req.body.foto],
            (error,resultado,field) =>{
                conn.release();

                if(error){
                    return res.status(500).send({
                        error:error,
                        response:null
                    });
                }

                res.status(201).send({
                    mensagem:'Inserido com sucesso',
                    id_produto: resultado.insertId
                });
            }
        );
    });
});

router.get('/:id_produto', (req,res,next) =>{
    mysql.getConnection((error,conn)=>{
        if(error){return res.status(500).send({ error:error }) }
        conn.query(
            'SELECT * FROM produto WHERE id = ?',
            [req.params.id_produto],
            (error,resultado,fields)=>{
                if(error){return res.status(500).send({ error:error }) }
                return res.status(200).send({
                    response:resultado
                });
            }
        );
    });
});

module.exports = router;