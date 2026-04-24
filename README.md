# 🚀 tf-brief

Uma ferramenta simples para gerar um resumo de planos do Terraform, tornando a visualização mais rápida e legível do que o output padrão.

---

## 📌 Sobre

O **tf-brief** foi criado para facilitar a visualização do output do `terraform plan`, destacando de forma clara:

* ➕ Recursos a serem criados
* 🔄 Recursos a serem atualizados
* ❌ Recursos a serem destruídos
* ♻️ Recursos que serão recriados

Tudo isso em um formato limpo, direto e fácil de entender.

---

## ⚙️ Instalação

### Usando Node.js

```bash
npm install
npm link
```

---

## 🚀 Uso

### 1. Gerar o plano do Terraform

```bash
terraform plan -out=plano
```

### 2. Executar o tf-brief

```bash
tf-brief plano
```

---

## 🔥 Exemplo

imagem.jpg do exemplo

---

## 🧠 Como funciona

O tf-brief lê o arquivo gerado pelo Terraform (`.tfplan`) e apresenta um resumo simplificado das mudanças que serão aplicadas.

---

## 💡 Por que usar?

O output padrão do Terraform pode ser verboso e difícil de ler.
O **tf-brief** resolve isso trazendo uma visão rápida e objetiva do que realmente importa.

---

## 🤝 Contribuição

Contribuições são bem-vindas!
Sinta-se à vontade para abrir issues ou pull requests.

---

## 📄 Licença

MIT
