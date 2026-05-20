/*criação do banco de dados*/
CREATE DATABASE agenda_estudos;
GO
USE agenda_estudos;
GO

/*criação das tabelas(tabela Usuario)*/
CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    criado_em DATETIME DEFAULT GETDATE()
);

/*criação das tabelas(tabela materias)*/
CREATE TABLE subjects (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    cor VARCHAR(7) DEFAULT '#4F46E5',
    ativo BIT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

/*criação das tabelas(tabela sessões de estudo)*/
CREATE TABLE study_sessions (
    id INT IDENTITY(1,1) PRIMARY KEY,
    subject_id INT NOT NULL,
    inicio DATETIME NOT NULL,
    fim DATETIME,
    duracao_min INT,
    notas VARCHAR(500),
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);

/*criação das tabelas(tabela metas semanais)*/
CREATE TABLE goals (
    id INT IDENTITY(1,1) PRIMARY KEY,
    subject_id INT NOT NULL,
    meta_min_semana INT NOT NULL,
    semana_ref DATE NOT NULL,
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);

/*dado de teste*/
INSERT INTO users (nome, email) VALUES ('Gabriela', 'gabriela@email.com');