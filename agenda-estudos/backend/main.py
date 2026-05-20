from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import get_connection

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Subject(BaseModel):
    nome: str
    cor: str = "#4F46E5"
    user_id: int = 1

@app.get("/subjects")
def listar_materias():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, nome, cor FROM subjects WHERE ativo = 1")
    rows = cursor.fetchall()
    conn.close()
    return [{"id": r[0], "nome": r[1], "cor": r[2]} for r in rows]

@app.post("/subjects")
def criar_materia(subject: Subject):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO subjects (user_id, nome, cor) VALUES (?, ?, ?)",
        (subject.user_id, subject.nome, subject.cor)
    )
    conn.commit()
    conn.close()
    return {"mensagem": "Matéria criada com sucesso!"}

@app.delete("/subjects/{id}")
def deletar_materia(id: int):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE subjects SET ativo = 0 WHERE id = ?", (id,))
    conn.commit()
    conn.close()
    return {"mensagem": "Matéria removida!"}    