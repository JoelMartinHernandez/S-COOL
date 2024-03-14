
import { createClient } from '@/utils/supabase/server';
import { Askus } from '@/app/types/types';
import { info } from 'console';




export async function addDoubt(doubt_message : string) {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    console.log(user)
    if(user.data.user){
        const { data, error } = await supabase
        .from('doubt')
        .insert([
            { doubt_message: doubt_message, course_id: 16, user_id:  user.data.user.id },
        ])
        .select()
        if(data){
        return data[0] as Askus;
        }
    }
}