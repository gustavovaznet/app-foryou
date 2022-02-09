//TEACHER FORM INDEX PAGE

//IMPORTING
import React, {useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import api from '../../services/api';

//TEACHERFORM FUNCTION
function TeacherForm(){
    const history = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');    
    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from:'', to:''}
    ]);
    //ADD NEW SCHEDULE
    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from:'',to:''}
        ]);
    }
    //SET SCHEDULE
    function setScheduleItemValue(position: number, field: string, value: string){
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return { ...scheduleItem, [field]: value};
            }
            return scheduleItem;
        });
        setScheduleItems(updateScheduleItems);
    }
    //CREATE CLASS
    function handleCreateClass(e: FormEvent){
        e.preventDefault();
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert("Cadastro realizado com sucesso!");
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!');
        });
    }
    
    //RETURN
    return(
        <div id="page-teacher-form" className="container">
            {/* HEADER COMPONENT */}
           <PageHeader 
                title="Estamos contentes em ter um teacher como você em nossa plataforma."
                description="Para começarmos, por favor preencha o formulário de inscrição."
            /> 
            {/* MAIN SECTION */}           
            <main>
                <form onSubmit={handleCreateClass}>
                {/* PERSONAL DATA REGISTER FORM SECTION */}
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input 
                        name="name" 
                        label="Nome completo"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} 
                    />
                    <Input 
                        name="avatar"
                        label="Avatar"
                        value={avatar}
                        onChange={(e) => { setAvatar(e.target.value) }} 
                    />
                    <Input 
                        name="whatsapp"
                        label="WhatsApp"
                        value={whatsapp}
                        onChange={(e) => { setWhatsapp(e.target.value) }} 
                    />
                    <Textarea
                        name="bio" 
                        label="Biografia"
                        value={bio}
                        onChange={(e) => { setBio(e.target.value) }} 
                    />
                </fieldset>
                {/* IDIOM FORM SECTION */}
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
                        name="subject" 
                        label="Idioma"
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}}
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
                    <Input 
                        name="cost" 
                        label="Custo da sua hora por aula"
                        value={cost}
                        onChange={(e) => {setCost(e.target.value)}} 
                    />                
                </fieldset>
                {/* DAY AND TIME FORM SECTION */}
                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>
                    {scheduleItems.map((scheduleItem, index) => {
                        return(
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da semana"
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                    name="from" 
                                    label="Das"
                                    value={scheduleItem.from}
                                    onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                                />
                                <Input 
                                    type="time" 
                                    name="to"
                                    label="Até"
                                    value={scheduleItem.to}
                                    onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                                />
                            </div>
                        );
                    })}
                </fieldset>
                {/* FOOTER SECTION */}
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    {/* SUBMIT BUTTON */}
                    <button type="submit">
                        Salvar cadastro
                    </button>
                </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;
