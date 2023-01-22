import { useCallback, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { api } from '../lib/axios';

import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { DAY_SIZE, HabitDay } from '../components/HabitDay';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';

const weeekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const datesFromYearStart = generateDatesFromYearBeginning();
const minimumSummaryDateSizes = 18 * 6;
const amountOfDaysToFill = minimumSummaryDateSizes - datesFromYearStart.length;

type Summary = {
  date: string;
  id: string;
  amount: number;
  completed: number;
}[]

export function Home() {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<Summary | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await api
      .get('/summary');
      console.log(response.data)
      setSummary(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Ocorreu um erro ao buscar os dados')
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchData();
  }, []));

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weeekDays.map((weekDay, i) => (
          <Text
            className='text-zinc-400 text-xl font-bold text-center mx-1'
            key={`${weekDay}-${i}`}
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        { 
          summary && <View className='flex-row flex-wrap'>
            {
              datesFromYearStart.map(date => {
                const dayWithHabits = summary.find(day => dayjs(date).isSame(day.date, 'day'));

                
                return (
                  <HabitDay
                    amount={dayWithHabits?.amount}
                    completed={dayWithHabits?.completed}
                    date={date}
                    key={date.toISOString()}
                    onPress={() => navigate('habit', { date: date.toISOString() })}
                  />
              )})
            }

            {
              amountOfDaysToFill > 0 && Array
                .from({ length: amountOfDaysToFill })
                .map((_, i) => (
                <View
                  key={i}
                  className="bg-zinc-900  rounded-lg border-2 m-1 border-zinc-800 opacity-60"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />
              ))
            }
        </View>}
      </ScrollView>



    </View>
  )
}