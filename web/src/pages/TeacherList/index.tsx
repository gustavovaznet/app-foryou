//TEACHER LIST INDEX PAGE

//IMPORTING
import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import './styles.css';

//TEACHER LIST FUNCTION
function TeacherList(){
    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    //SEARCH TEACHERS FUNCTION
    async function searchTeachers(e: FormEvent){
        e.preventDefault();
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time,
            }
        }) 
        setTeachers(response.data);
    }
    //RETURN
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Escolha um teacher disponível abaixo.">
               <form id="search-teachers" onSubmit={searchTeachers}>
               <Select 
                    name="subject" 
                    label="Idioma"
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value)}}
                    options={[
                        { value: 'Inglês', label: 'Inglês' },
                        { value: 'Espanhol', label: 'Espanhol' },
                        { value: 'Mandarim', label: 'Mandarim' },
                        { value: 'Japonês', label: 'Japonês' },
                        { value: 'Coreano', label: 'Coreano' },
                        { value: 'Alemão', label: 'Alemão' },
                        { value: 'Italiano', label: 'Italiano' },
                        { value: 'Francês', label: 'Francês' },
                        { value: 'Russo', label: 'Russo' },
                        { value: 'Árabe', label: 'Árabe' },
                    ]} 
                />
                <Select 
                    name="week_day" 
                    label="Dia da semana"
                    value={week_day}
                    onChange={(e) => { setWeekday(e.target.value)}}
                    options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta-feira' },
                        { value: '6', label: 'Sábado' },                       
                    ]} 
                />
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={(e) => {setTime(e.target.value)}}
                    />
                    <button type="submit">
                        Buscar
                    </button>
               </form>
           </PageHeader>
           <main>
               {teachers.map((teacher: Teacher ) => {
                   return <TeacherItem key={teacher.id} teacher={teacher} />
               })}
            </main>
        </div>
    );
}

export default TeacherList;
