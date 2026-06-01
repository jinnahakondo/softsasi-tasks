import React from 'react'

type CardVariant = "media" | "stats" | "profile";

interface CardProps {
    variant: CardVariant;
    title: string;
    description?: string;
    image?: string;
    label?: string;
    value?: number;
    name?: string;
    role?: string;
    avatar?: string;
}

export default function Card(props: CardProps) {
    const { variant } = props;
    switch (variant) {
        case "media":
            return (
                <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <img
                        src={props.image}
                        alt={props.title}
                        className="h-52 w-full object-cover"
                    />

                    <div className="p-5">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            {props.title}
                        </h3>

                        <p className="text-sm text-gray-600">
                            {props.description}
                        </p>
                    </div>
                </div>

            )
        case "stats":
            return (
                <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <p className="mb-2 text-sm font-medium text-gray-500">
                        {props.label}
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900">
                        {props.value}
                    </h2>
                </div>
            );
        case "profile":
            return (
                <div className="rounded-2xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <img
                        src={props.avatar}
                        alt={props.name}
                        className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-gray-100 object-cover"
                    />

                    <h3 className="text-xl font-semibold text-gray-900">
                        {props.name}
                    </h3>

                    <p className="mt-1 text-gray-500">
                        {props.role}
                    </p>
                </div>
            );
        default:
            return null;
    }
}
