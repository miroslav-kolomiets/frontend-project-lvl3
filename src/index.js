import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function form() {
  const form = document.createElement('form');
  const formInner = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const formText = document.createElement('div');
  const button = document.createElement('button');

  formInner.classList.add('mb-3');

  label.classList.add('form-label');
  label.textContent = 'Ссылка RSS';

  input.classList.add('form-control');

  formText.classList.add('form-text');
  formText.textContent = 'Пример: https://ru.hexlet.io/lessons.rss';

  button.classList.add('btn', 'btn-primary');
  button.textContent = 'Добавить';

  form.append(formInner);
  formInner.append(label);
  formInner.append(label);
  formInner.append(input);
  formInner.append(formText);
  form.append(button);

  return form;
}

document.body.appendChild(form());
