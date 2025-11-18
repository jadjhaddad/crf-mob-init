import { TouchableOpacity, View, ViewProps } from "react-native";
import CustomText from "../common/CustomText";
import dayjs from "dayjs";
import { Fragment } from "react";

interface AppointmentData {
  startDate: Date;
  endDate: Date;
  patient: string;
  notes?: string;
}

interface AppointmentCardProps extends ViewProps {
  color: string;
  fieldStartDate: Date;
  fieldEndDate: Date;
  field: string;
  containerClassName?: string;
  appointmentInfo: Array<AppointmentData>;
}

interface AppointmentInfoProps extends AppointmentData {
  color: string;
}

const AppointmentInfo: React.FC<AppointmentInfoProps> = ({
  color,
  startDate,
  endDate,
  patient,
  notes,
}) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const startTimeFull = start.format("h:mmA");
  const endTimeFull = end.format("h:mmA");
  const dateFormatted = start.format("MMM D, YYYY");

  return (
    <TouchableOpacity
      className="flex-1 flex-row w-full items-center"
      style={{ paddingHorizontal: "3.5%", paddingVertical: "3%" }}
    >
      <View
        style={{ backgroundColor: color }}
        className="h-full w-1.5 mr-3 rounded-md"
      />
      <View className="flex-1">
        <CustomText style={{ color }} className="text-xs leading-3">
          {dateFormatted} • {startTimeFull} - {endTimeFull}
        </CustomText>
        <CustomText className="text-lg leading-7">{patient}</CustomText>
        {notes && (
          <CustomText
            numberOfLines={2}
            style={{ lineHeight: 18 }}
            className="text-base text-placeholder leading-5"
          >
            {notes}
          </CustomText>
        )}
      </View>
    </TouchableOpacity>
  );
};

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  color,
  fieldStartDate,
  fieldEndDate,
  field,
  appointmentInfo,
  containerClassName,
}) => {
  const now = dayjs();
  const start = dayjs(fieldStartDate);
  const end = dayjs(fieldEndDate);

  const isHappeningNow = now.isAfter(start) && now.isBefore(end);
  const isUpcoming = now.isBefore(start);

  const startTimeShort = start.format("hA");
  const endTimeShort = end.format("hA");

  const fieldAbbr = field.substring(0, 4).toUpperCase();

  return (
    <View
      className={`flex-initial rounded-lg overflow-hidden w-full ${containerClassName}`}
    >
      <View
        style={{ backgroundColor: `${color}1A` }}
        className="flex-row aspect-[320/34] items-center px-2"
      >
        {isHappeningNow && (
          <CustomText
            style={{ fontSize: 10 }}
            className="text-placeholder mr-1"
          >
            NOW
          </CustomText>
        )}
        {isUpcoming && (
          <CustomText
            style={{ fontSize: 10 }}
            className="text-placeholder mr-1"
          >
            UPCOMING
          </CustomText>
        )}
        <CustomText style={{ fontSize: 16, color }} className="flex-1">
          {field}
        </CustomText>
        <View
          style={{ backgroundColor: `${color}1A` }}
          className="p-1 rounded-md mr-1"
        >
          <CustomText style={{ fontSize: 12, color }}>{fieldAbbr}</CustomText>
        </View>
        <CustomText style={{ fontSize: 14 }} className="text-placeholder">
          {startTimeShort} - {endTimeShort}
        </CustomText>
      </View>

      <View className="flex-1 bg-white">
        {appointmentInfo?.map((appointmentData, index) => (
          <Fragment key={index}>
            {index > 0 && (
              <View style={{ height: 1 }} className="bg-borderColor w-full" />
            )}
            <AppointmentInfo {...appointmentData} color={color} />
          </Fragment>
        ))}
      </View>
    </View>
  );
};

export default AppointmentCard;
