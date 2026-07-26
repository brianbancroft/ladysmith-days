import { Form } from '@remix-run/react'
import posthog from 'posthog-js'

type FormProps = {
  title?: string
  description: string
  route: string
  placeholder?: string
}

const FormContactGeneral = ({
  title = 'Contact Us',
  description,
  route,
  placeholder,
}: FormProps) => {
  return (
    <div className="w-full">
      {title && (
        <h2 className="mb-2 font-heading text-2xl font-semibold text-gray-800">
          {title}
        </h2>
      )}
      <p className="mb-6 text-gray-600 leading-relaxed">{description}</p>
      <Form
        className="flex flex-col gap-4"
        action={route}
        method="post"
        onSubmit={() => {
          posthog.capture('contact_form_submitted', { page: route })
        }}
      >
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        <textarea
          required
          name="message"
          rows={5}
          placeholder={placeholder ?? 'Tell us what you think...'}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:bg-blue-900"
        >
          Submit
        </button>
      </Form>
    </div>
  )
}

export default FormContactGeneral
