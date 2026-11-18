# StudyWithU 📚
Agenda de estudos para organizar matérias, sessões de estudo e metas.

## Funcionalidades
- Cadastro de matérias
- Registro de sessões de estudo
- Metas e revisão
- Dashboard com resumo do progresso

## Tecnologias
- Frontend: Vue 3, Vite, Vue Router
- Backend: Python (FastAPI/Flask)
- Banco de dados: (MySQL/PostgreSQL/SQLite)

## Como rodar localmente
### Backend
cd agenda-estudos/backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload

### Frontend
cd agenda-estudos/frontend
npm install
npm run dev

## Banco de dados
Execute o arquivo `banco.sql` para criar as tabelas.

## Deploy
Frontend no Vercel: (link)

## Autora
Gabriela Guedes
